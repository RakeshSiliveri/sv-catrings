#!/usr/bin/env python3
"""
S.V Caterers - Local Development Server
Owner: Rakesh | Contact: +91 95736 05102
"""

import http.server
import socketserver
import webbrowser
import os
import sys

DEFAULT_PORT = 8080

def run_server(port=DEFAULT_PORT):
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    
    handler = http.server.SimpleHTTPRequestHandler
    
    # Try preferred port, fallback to dynamic port if busy
    while port < 8100:
        try:
            with socketserver.TCPServer(("", port), handler) as httpd:
                url = f"http://localhost:{port}"
                print("=" * 60)
                print(f" S.V Caterers Website Server Running!")
                print(f" URL: {url}")
                print(f" Owner: Rakesh | Contact: +91 95736 05102")
                print(" Press Ctrl+C to stop the server.")
                print("=" * 60)
                
                # Automatically open in browser if run interactively
                try:
                    webbrowser.open(url)
                except Exception:
                    pass
                    
                httpd.serve_forever()
        except OSError as e:
            if "address already in use" in str(e).lower() or e.errno == 10048:
                port += 1
            else:
                raise e

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_PORT
    run_server(port)
