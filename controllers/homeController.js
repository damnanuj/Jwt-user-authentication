export const homeController = (req, res) => {
  res.status(200).send(`
        <html>
          <head>
            <title>JWT User Authentication API</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              h1 { color: #333; }
              p { font-size: 16px; color: #555; }
              ul { list-style-type: none; padding: 0; }
              li { margin-bottom: 8px; }
              strong { color: #333; }
              footer { margin-top: 30px; font-size: 14px; color: #777; }
              footer a { color: #007bff; text-decoration: none; }
              footer a:hover { text-decoration: underline; }
            </style>
          </head>
          <body>
            <h1>Welcome to JWT User Authentication API</h1>
            <p>This API allows for user registration, login, and access control using JSON Web Tokens (JWT).</p>
            
            <h2>Endpoints</h2>
            <ul>
              <li><strong>POST /api/auth/signup:</strong> Register a new user</li>
              <li><strong>POST /api/auth/login:</strong> Log in an existing user</li>
              <li><strong>POST /api/auth/logout:</strong> Log out the current user</li>
              <li><strong>GET /api/user/dashboard:</strong> Access the dashboard with logged-in user's details</li>
            </ul>
    
            <h3>Key Features</h3>
            <ul>
              <li>JWT-based authentication for secure session management</li>
              <li>Password encryption for secure data handling</li>
              <li>Protected routes that require authentication</li>
              <li>Real-time error handling for API requests</li>
            </ul>
    
            <p><strong>Note:</strong> Ensure to pass a valid token (JWT) for protected routes.</p>
  
            <footer>
              <p>&copy; ${new Date().getFullYear()} | Made by <a href="https://github.com/damnanuj" target="_blank">damnanuj</a></p>
            </footer>
          </body>
        </html>
      `);
};
