export const tsconfigBoilerplate = () => {
  const lines = [
    `{`,
    `\t"compilerOptions": {`,
    `\t\t"target": "ES2022",`,
    `\t\t"module": "commonjs",`,
    `\t\t"outDir": "dist",`,
    `\t\t"rootDir": "src",`,
    `\t\t"moduleResolution": "node",`,
    `\t\t"strict": true,`,
    `\t\t"resolveJsonModule": true,`,
    `\t\t"esModuleInterop": true,`,
    `\t\t"forceConsistentCasingInFileNames": true,`,
    `\t\t"skipLibCheck": true`,
    `\t},`,
    `\t"include": ["src/**/*"],`,
    `\t"exclude": ["node_modules", "dist"]`,
    `}`
  ]
  return lines.join("\n")
}
