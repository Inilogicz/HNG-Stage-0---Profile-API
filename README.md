# HNG Stage 0 - Profile API

This is a simple RESTful API endpoint created for the HNG Internship Stage 0 task. It returns a JSON object containing my profile information and a dynamic cat fact fetched from an external API.

## API Endpoint

-   **URL**: `/me`
-   **Method**: `GET`
-   **Success Response**:
    -   **Code**: `200 OK`
    -   **Content**:
        ```json
        {
          "status": "success",
          "user": {
            "email": "your.email@example.com",
            "name": "Your Full Name",
            "stack": "Node.js/Express"
          },
          "timestamp": "2025-10-16T12:00:00.000Z",
          "fact": "facts from catfact"
        }
        ```

## Setup and Installation

### Prerequisites

-   Node.js and npm

### Running Locally

1.  Clone the repository:
    ```bash
    git clone https://github.com/Inilogicz/HNG-Stage-0---Profile-API.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd stage-zero-task
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Run the server:
    ```bash
    node index.js
    ```
The server will be running at `http://localhost:3000`.
