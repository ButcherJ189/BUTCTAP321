import logging
from telegram import InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Updater, CommandHandler

# Replace with your actual BotFather API token
BOT_TOKEN = '8139405023:AAFMgOTyTViauEXeN6-8xb8EyPiOXa2Rw7g'  # Replace this with your actual token

# Setup logging to debug the bot
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)
logger = logging.getLogger(__name__)

# Define the start command
def start(update, context):
    # Logging for debugging
    logger.info("Received /start command")
    
    # Create an inline button that links to the Nocto Tapper game as a Web App
    keyboard = [
        [InlineKeyboardButton("Play Nocto Tapper", web_app={"url": "https://nocto-tapper.vercel.app"})]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    # Send a welcome message and button
    update.message.reply_text(
        "Welcome to the Nocto Tapper game! Press the button below to start playing.",
        reply_markup=reply_markup
    )

# Define the main function to set up the bot
def main():
    # Initialize the Updater with your bot's API token
    updater = Updater(BOT_TOKEN, use_context=True)
    dispatcher = updater.dispatcher

    # Add the handler for the /start command
    start_handler = CommandHandler('start', start)
    dispatcher.add_handler(start_handler)

    # Start the bot and begin polling for messages
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()