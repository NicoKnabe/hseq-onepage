# Regenera public/brochure.pdf desde brochure.html (requiere playwright + chromium).
# Uso: python3 brochure-src/build.py
import os
from playwright.sync_api import sync_playwright
here = os.path.dirname(os.path.abspath(__file__))
out = os.path.join(here, "..", "public", "brochure.pdf")
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page()
    pg.goto("file://" + os.path.join(here, "brochure.html")); pg.wait_for_timeout(2500)
    pg.pdf(path=out, format="A4", print_background=True, prefer_css_page_size=True); b.close()
print("ok", os.path.getsize(out) // 1024, "KB")
