from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo

main = InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text='Запустить приложение', web_app=WebAppInfo(url=f"https://sensational-crepe-dd1403.netlify.app/"))]])