@echo off
echo ===================================================
echo  S.V Caterers - 1-Click Deploy to GitHub
echo  Owner: Rakesh | Contact: +91 95736 05102
echo ===================================================
echo.
echo Make sure you have created the repository 'sv-caterers' on GitHub:
echo URL: https://github.com/new
echo.
pause
echo Pushing files to GitHub...
git push -u origin main
echo.
echo ===================================================
echo Done! Next, enable GitHub Pages:
echo 1. Go to: https://github.com/RakeshSiliveri/sv-caterers/settings/pages
echo 2. Under 'Branch', select 'main' and click 'Save'.
echo 3. Your site will be live at:
echo    https://rakeshsiliveri.github.io/sv-caterers/
echo ===================================================
pause
