# My First Node.js App

## 🚀 How to Run
1. Install Node.js
2. Navigate to this folder
3. Run with: `node app.js [yourName]`

## 📂 File Descriptions
- `app.js`: Main application logic
- `utils.js`: Utility functions (add, capitalize)
- `info.txt`: Output from file system operations
- `repl-session.txt`: Commands used in REPL

## 🛠️ Enhancements
- Personalized console output
- File writing/reading example
- CLI and env variable usage
- Use of built-in modules: fs, path, os, process

## 🧩 Challenges & Solutions
- **Issue**: Relative path errors in `fs`
  - **Fix**: Used `__dirname` with `path.join()`
- **Issue**: Env variables undefined
  - **Fix**: Used fallback with `||`

