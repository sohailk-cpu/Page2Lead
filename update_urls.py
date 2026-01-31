#!/usr/bin/env python3
import os
import re

# Files to update
files_to_update = [
    'index.html',
    'services.html',
    'portfolio.html',
    'blog.html',
    'contact.html',
    'privacy.html',
    'terms.html',
    'sitemap.xml',
    'robots.txt'
]

old_url = 'https://sohailk-cpu.github.io/Page2Lead'
new_url = 'https://page2lead.in'

for filename in files_to_update:
    if os.path.exists(filename):
        with open(filename, 'r') as file:
            content = file.read()
        
        # Replace URLs
        content = content.replace(old_url, new_url)
        
        with open(filename, 'w') as file:
            file.write(content)
        
        print(f'✅ Updated: {filename}')

print('\n🎉 All files updated successfully!')
print('Don\'t forget to:')
print('1. Update DNS records')
print('2. Set up custom domain in GitHub Pages')
print('3. Update Google Search Console')
print('4. Update Google Analytics')
