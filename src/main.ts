import inquirer from "inquirer"
import chalk from "chalk"
import fs from 'fs'
import path from "path"
import {spawn} from "child_process"


import { envBoilerplate } from "./boilerplates/env"
import { appBoilerplate } from "./boilerplates/app"
import { packageJsonBoilerplate } from "./boilerplates/package-json"
import { tsconfigBoilerplate } from "./boilerplates/tsconfig"
import { gitignoreBoilerplate } from "./boilerplates/gitignore"
import { authRouterBoilerplate } from "./boilerplates/authRouterBoilerplate"
import { authControllerBoilerplate } from "./boilerplates/authControllerBoilerplate"
import { authModelBoilerplate } from "./boilerplates/authModelBoilerplate"
import { authMiddlewareBoilerplate } from "./boilerplates/authMiddleware"
import { catchErrorBoilerplate } from "./boilerplates/error"
import { authInterfaceBoilerplate } from "./boilerplates/authInterface"
import { refreshMiddleware } from "./boilerplates/refreshMiddleware"



// 🎯 Prompt project name with validation
export const enterProjectName = async () => {
    const { projectName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: chalk.cyanBright('👉 Enter your project name: (type exit to close)'),
            validate: (input:string) => {
                const trimmed = input.trim()
                if (!trimmed)
                    return chalk.redBright('❌ Project name cannot be empty.')
                if (!/^[a-z0-9-]+$/.test(trimmed)) {
                    return chalk.redBright('❌ Use only lowercase letters, numbers, and hyphens (no spaces or special characters).')
                }
                if (/^\d/.test(trimmed))
                    return chalk.redBright('❌ Project name cannot start with a number.')
                if (trimmed.length > 214)
                    return chalk.redBright('❌ Project name is too long (must be under 214 characters).')
                return true
            }
        }
    ])
    return projectName.trim()
}


// Choose Language
async function chooseLanguage() {
    const { language } = await inquirer.prompt([
        {
        type: "list",
        name: "language",
        message: chalk.cyanBright("Select your Programming Language:"),
        choices: ["JavaScript", "TypeScript"]
        },
    ]);

    console.log(chalk.green("🚀 You selected:"), chalk.yellow(language));
    return language
}

// ✍️ Utility to write file with folder creation
const createFile = (filePath:string, content:string) => {
    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, content)
    console.log(chalk.green(`✅ Created:`), chalk.grey(filePath))
}
// 🚀 Main CLI flow
const main = async () => {
    console.log(chalk.magentaBright(`\n✨ Welcome to the Project Setup CLI by ${chalk.bold('Vijay Jadhav')}`))
    console.log(chalk.magentaBright('🌐 Website:'), chalk.underline.yellowBright('https://vijay-jadhav1997.netlify.app'))
    console.log(chalk.greenBright('────────────────────────────────────────────\n'))
    try {
        let name
        let root
        while (true) {
            name = await (0, exports.enterProjectName)()
            if (name === 'exit') {
                console.log(chalk.redBright('\n👋 Exiting by user command...'))
                process.exit(0)
            }
            root = path.join(process.cwd(), name)
            if (fs.existsSync(root)) {
                console.log(chalk.red(`❌ Folder "${name}" already exists in this directory.\n`))
                continue
            }
            break
        }

        // type of project ex. => 1) simple MVC structure with JS files , 2) simple MVC structure with JS files, 3) MVC structure with Authentication TS.
        const language = chooseLanguage();

        return
        
        // 🛠️ Create project structure
        createFile(path.join(root, '.env'), envBoilerplate(name))
        createFile(path.join(root, 'src/app.ts'), appBoilerplate())
        createFile(path.join(root, 'src/model/auth.model.ts'), authModelBoilerplate())
        createFile(path.join(root, 'src/middleware/auth.middleware.ts'), authMiddlewareBoilerplate())
        createFile(path.join(root, 'src/middleware/refreshToken.middleware.ts'), refreshMiddleware())
        createFile(path.join(root, 'src/controller/auth.controller.ts'), authControllerBoilerplate())
        createFile(path.join(root, 'src/router/auth.router.ts'), authRouterBoilerplate())
        createFile(path.join(root, 'src/lib/error.ts'), catchErrorBoilerplate())
        createFile(path.join(root, 'src/interface/auth.interface.ts'), authInterfaceBoilerplate())
        createFile(path.join(root, 'package.json'), packageJsonBoilerplate(name))
        createFile(path.join(root, 'tsconfig.json'), tsconfigBoilerplate())
        createFile(path.join(root, '.gitignore'), gitignoreBoilerplate())

        // 📦 Install dependencies
        console.log(chalk.greenBright(`\n📦 Installing dependencies...`))
        const install = spawn('npm', ['install'], { cwd: root, stdio: 'inherit', shell: true })
        install.on('exit', (code:number) => {
            if (code !== 0) {
                console.error(chalk.redBright(`❌ npm install failed with exit code ${code}`))
                return
            }

            // 🚀 Start dev server
            console.log(chalk.greenBright(`\n🚀 Starting development server...`))
            console.log(chalk.gray(`💡 Hint: Type ${chalk.yellow(':q')} and press Enter to exit\n`))
            const dev = spawn('npm', ['run', 'dev'], {
                cwd: root,
                stdio: 'inherit',
                shell: true
            })
        })
    }
    catch (err) {
        console.error(chalk.bgRed.white('❌ Error:'), chalk.redBright(err))
    }
    
    console.log(chalk.gray('\n────────────────────────────────────────────'))
    console.log(chalk.gray(`© ${new Date().getFullYear()}`), chalk.bold('tsnode'), '| Start building your node/express app.\n')
}
main()
