# Gym Management Interface

## Developed by: Youness & LuisMi

This project is an Angular application to manage gym monitors and activities. The interface is designed for tablet and laptop screens, enabling gym administrators to manage daily activities and monitor schedules efficiently.

---

## **Objective**

The goal of this project is to implement a user interface as closely as possible to the provided designs, even though it might seem challenging at first! We aim to create reusable components and avoid redundant code or a single component solution.

### Key Features:

1. **Header & Function Selector**:
   - The page always includes a header displaying the gym's name and logo.
   - At the bottom, there is a function selector allowing users to switch between the "Activities" and "Monitors" pages.

2. **Activities Page**:
   - Users can choose a date and navigate through different days.
   - Three fixed activity blocks are displayed for each day.
   - Free blocks allow the addition of new activities through a form.
   - Activities can be edited or deleted.
   - Each activity card shows the assigned monitors and the type of activity (e.g., "BodyPump" needs 2 monitors, "Spinning" requires 1).

3. **Monitors Page**:
   - A carousel to display current gym monitors.
   - A search bar to filter through the list of monitors.
   - Options to create, edit, or delete monitor profiles.

4. **Backend**:
   - The backend is mock-based, providing initial lists of activities and monitors at the app's startup. Alternatively, you can use the API from the DW project or both approaches to test components without depending solely on the DW API.

---

## **Technologies Used**

- **Angular** for front-end development.
- **TypeScript** for coding.
- **HTML/CSS** for styling.
- **Mock Services** for backend simulation (you can integrate with the DW API if needed).

---

## **Development Setup**

To run this project locally, follow the steps below:

### 1. Clone the Repository:

```bash
git clone https://github.com/YounessLuisMi/gym-management-interface.git

### 2. Install Dependencies:
Navigate to the project folder and install the required dependencies:

```bash
cd gym-management-interface
npm install

### 3. Install bootstrap:
```bash
npm install bootstrap

### 4. Run the Development Server:
Start the Angular development server:

```bash
ng serve
