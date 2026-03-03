from playwright.sync_api import sync_playwright
import time

def take_screenshot():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1442, "height": 10827})
        page.goto('http://localhost:4201/services')
        time.sleep(2)  # Wait for page load
        page.screenshot(path='services_page_full.png', full_page=True)
        browser.close()
        print("Screenshot saved to services_page_full.png")

take_screenshot()
