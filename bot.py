import logging
from telegram import InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Updater, CommandHandler

# Replace with your actual API token from BotFather
BOT_TOKEN = '8139405023:AAFMgOTyTViauEXeN6-8xb8EyPiOXa2Rw7g'  # Place your actual API token from BotFather here

# Initialize the Updater and the Dispatcher
updater = Updater(BOT_TOKEN, use_context=True)
dispatcher = updater.dispatcher

# Set up logging to help with debugging
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)
logger = logging.getLogger(__name__)

# Function that shows the inline button to start the game
def start(update, context):
    # Create an inline button that links to the Nocto Tapper game
    keyboard = [
        [InlineKeyboardButton("Play Nocto Tapper", url="https://nocto-tapper.vercel.app")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    # Send the message with the button
    update.message.reply_text('Welcome to Nocto Tapper! Click the button below to start playing:', reply_markup=reply_markup)

# Add a handler for the '/start' command
start_handler = CommandHandler('start', start)
dispatcher.add_handler(start_handler)

# Start the bot and begin polling
updater.start_polling()
updater.idle()
