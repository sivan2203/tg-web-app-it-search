
from aiogram import Router
from aiogram.types import Message
from aiogram.filters import CommandStart, Command

import src.app.keyboards as kb

router = Router()

@router.message(CommandStart())
async def cmd_start(message: Message):
    await message.answer('Привет', reply_markup=kb.main)

@router.message(Command('help'))
async def cmd_help(message: Message):
    await message.answer('Кнопка помощи')