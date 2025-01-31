# Proyecto4VGYM

This project is a web application built with Angular, designed to manage gym monitors and activities. It is intended for use on tablet/laptop interfaces.

## Description

This application provides the following features:

- **Activities Management**: Allows the user to select a date and manage fixed activity blocks. Users can add, edit, or delete activities, and each activity shows the assigned monitors and activity type (e.g., BodyPump with 2 monitors, Spinning with 1 monitor).
- **Monitors Management**: Displays current gym monitors in a carousel format with a search functionality. New monitors can be added, edited, or deleted.
- **Design Fidelity**: The application is implemented to match the provided Figma design as closely as possible.

## Features

- **Header**: The application always has a header with the name and logo of the gym.
- **Navigation**: At the bottom, there is a selector to choose between "Activities" and "Monitors".
- **Activity Blocks**: Each day has three fixed activity blocks, with the possibility to add, edit, or delete activities.
- **Monitors Carousel**: Displays a carousel of current gym monitors with a search bar for easy navigation.
- **Mock Backend**: The backend uses mock services with lists of activities and monitors that are initialized when the app starts. Alternatively, you can use your API if available.

## Development Server

To start a local development server, run:

```bash
ng serve
