# 🧩 Component Collection Project

This project is a growing collection of reusable React components, currently focused on file upload functionality. The project is structured to allow for easy expansion and addition of new components in the future.

## 🗂️ Key Directories

- `app`: Contains the main application files, including the layout and pages.
- `components`: Houses all the reusable components, divided into global and UI components.
- `constants`: Stores constant values and configurations used across the project.
- `lib`: Contains utility functions and helper methods.
- `types`: Includes TypeScript type definitions for the project.

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

## 📦 Available Components

Currently, the project includes the following main components:

1. 📥 **Dropzone**: A file upload component that allows users to drag and drop files or select them from their device.
   - File: `components/global/dropzone.tsx`

2. 📊 **Dashboard**: A component for displaying and managing uploaded files or other relevant information.
   - File: `components/global/dashboard.tsx`

More components will be added in the future as the project grows.

## ➕ Adding New Components

To add new components to the collection:

1. Create a new file in the appropriate directory under `components/`.
2. Implement your component using React and TypeScript.
3. Export the component from the `components/global/index.ts` file if it's a global component.
4. Update this README to reflect any significant additions or changes to the project structure.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[Add your chosen license here]