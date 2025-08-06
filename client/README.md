# Client Configuration

## API Configuration

The client now uses a centralized API configuration. To change the API URL:

1. Create a `.env` file in the client directory:
```bash
VITE_API_URL=https://your-api-url.com
```

2. If no `.env` file is found, it will default to `https://mindtypev2-1-0kjk.onrender.com`

## Building for Production

To build the client for production:

```bash
npm run build
```

This will create a `dist` folder with the production build.

## Development

For development, the client uses a proxy configuration in `vite.config.js` that forwards `/api` requests to `http://localhost:3500`.

## CORS Issues

If you're experiencing CORS issues:

1. Make sure your server is running and accessible
2. Check that the API URL in your `.env` file matches your server URL
3. Ensure the server CORS configuration allows your client domain
4. Rebuild the client after changing the API URL

## Troubleshooting

- If you see CORS errors, check the browser console for the exact URL being requested
- Make sure all components are using the centralized API configuration
- Clear browser cache if you're testing changes 