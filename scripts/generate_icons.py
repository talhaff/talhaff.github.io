import os
import base64
from PIL import Image, ImageDraw, ImageFont, ImageFilter

os.makedirs('public', exist_ok=True)
master = Image.open('public/favicon-circle-master.png').convert('RGBA')

# 1. Favicon PNG sizes (Google explicitly requires multiple of 48: 48, 96, 144, 192, etc.)
sizes = [16, 32, 48, 96, 144, 192, 512]
for s in sizes:
    resized = master.resize((s, s), Image.LANCZOS)
    resized.save(f'public/favicon-{s}x{s}.png')
    if s == 192:
        resized.save('public/android-chrome-192x192.png')
    elif s == 512:
        resized.save('public/android-chrome-512x512.png')

# 2. favicon.png default (48x48)
master.resize((48, 48), Image.LANCZOS).save('public/favicon.png')

# 3. apple-touch-icon.png (180x180)
apple_icon = Image.new('RGBA', (180, 180), (2, 6, 23, 255))
apple_logo = master.resize((156, 156), Image.LANCZOS)
apple_icon.paste(apple_logo, (12, 12), apple_logo)
apple_icon.convert('RGB').save('public/apple-touch-icon.png')

# 4. Multi-resolution favicon.ico (16x16, 32x32, 48x48)
ico_16 = master.resize((16, 16), Image.LANCZOS)
ico_32 = master.resize((32, 32), Image.LANCZOS)
ico_48 = master.resize((48, 48), Image.LANCZOS)
ico_48.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])

# 5. Clean SVG favicon
with open('public/favicon-96x96.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')
svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
  <image href="data:image/png;base64,{b64}" x="0" y="0" width="96" height="96" />
</svg>'''
with open('public/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

# 6. Generate og-image.png (1200x630)
W, H = 1200, 630
og = Image.new('RGBA', (W, H), (2, 6, 23, 255))

# Background glows
glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(glow)
gdraw.ellipse((40, 40, 520, 520), fill=(37, 99, 235, 75))
gdraw.ellipse((780, 140, 1160, 520), fill=(99, 102, 241, 45))
glow = glow.filter(ImageFilter.GaussianBlur(60))
og = Image.alpha_composite(og, glow)

# Logo
logo_size = 370
logo_resized = master.resize((logo_size, logo_size), Image.LANCZOS)
logo_glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
lgdraw = ImageDraw.Draw(logo_glow)
lx, ly = 90, int((H - logo_size) / 2)
lgdraw.ellipse((lx - 20, ly - 20, lx + logo_size + 20, ly + logo_size + 20), fill=(59, 130, 246, 100))
logo_glow = logo_glow.filter(ImageFilter.GaussianBlur(25))
og = Image.alpha_composite(og, logo_glow)
og.paste(logo_resized, (lx, ly), logo_resized)

# Typography
draw = ImageDraw.Draw(og)
font_title = ImageFont.truetype('C:\\Windows\\Fonts\\segoeuib.ttf', 54)
font_sub = ImageFont.truetype('C:\\Windows\\Fonts\\segoeui.ttf', 24)
font_role = ImageFont.truetype('C:\\Windows\\Fonts\\segoeuib.ttf', 30)
font_badge = ImageFont.truetype('C:\\Windows\\Fonts\\consola.ttf', 18)

tx = 505
ty = 155

# Badge
badge_text = 'SYSTEMS & FULLSTACK ENGINEER'
bbox = font_badge.getbbox(badge_text)
bw = bbox[2] - bbox[0] + 28
bh = 34
draw.rounded_rectangle((tx, ty, tx + bw, ty + bh), radius=8, fill=(30, 41, 59, 255), outline=(59, 130, 246, 180), width=1)
draw.text((tx + 14, ty + 7), badge_text, font=font_badge, fill=(96, 165, 250, 255))

# Name
draw.text((tx, ty + 50), 'Talha Özcan', font=font_title, fill=(248, 250, 252, 255))

# Subtitle
draw.text((tx, ty + 125), 'Bilgisayar Mühendisi & Sistem Mimarı', font=font_role, fill=(56, 189, 248, 255))

# Description
desc = 'Modern Web Mimarileri • Java / Spring Boot • Dağıtık Sistemler'
draw.text((tx, ty + 180), desc, font=font_sub, fill=(148, 163, 184, 255))

# URL Badge
draw.rounded_rectangle((tx, ty + 235, tx + 245, ty + 275), radius=8, fill=(15, 23, 42, 255), outline=(51, 65, 85, 255), width=1)
draw.text((tx + 16, ty + 243), 'https://talhaozcan.dev', font=font_badge, fill=(52, 211, 153, 255))

og.convert('RGB').save('public/og-image.png', quality=95)
print('SUCCESS: All icon formats and og-image generated with improved layout!')
