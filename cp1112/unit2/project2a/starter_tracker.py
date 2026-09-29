# starter_tracker.py
# Unit 2 - 2A Build It - Starter for a simple tracker
# (habits, reading log, workouts...)
#
# What's here:  a working menu loop and empty functions.
# What's not:   any of the actual tracker logic. That part is yours.
#
# Run it as-is first. The menu works, but every option just says
# "not built yet". Your job is to fill in each # TODO.
#
# Tip: rename things to fit YOUR tracker. "add_entry" could become
# "log_workout" or "add_book". Just change the name everywhere it's used.


# ---------------------------------------------------------------
# add_entry(entries)
# Should: ask the user what to add (a habit done today, a book title,
#         a workout...), check it isn't blank, and add it to the
#         entries list. Confirm it was added.
# ---------------------------------------------------------------
def add_entry(entries):
    # TODO: ask the user for the new entry with input()
    # TODO: if it's blank, tell them and don't add it
    # TODO: otherwise, add it to entries with .append() and confirm
    print("This feature isn't built yet.")


# ---------------------------------------------------------------
# show_entries(entries)
# Should: print every entry in the list, numbered (1, 2, 3...),
#         or print a message if the list is empty.
# ---------------------------------------------------------------
def show_entries(entries):
    # TODO: if the list is empty, say so
    # TODO: otherwise, loop through and print each entry with a number
    print("This feature isn't built yet.")


# ---------------------------------------------------------------
# show_summary(entries)
# Should: print something useful about the whole list, like how many
#         entries there are, or how many times a habit shows up.
#         What counts as "useful" depends on your tracker and your user.
# ---------------------------------------------------------------
def show_summary(entries):
    # TODO: decide what summary your user would want to see
    # TODO: work it out (len() and .count() are handy here)
    # TODO: print it in a friendly way
    print("This feature isn't built yet.")


# ---------------------------------------------------------------
# Main menu loop (this part already works)
# It keeps showing the menu until the user picks Quit.
# ---------------------------------------------------------------
def main():
    entries = []  # a list to hold everything the user has tracked

    print("Welcome to My Tracker!")  # TODO: give your tracker a real name

    running = True
    while running:
        print()
        print("1) Add an entry")  # TODO: rename options to match your tracker
        print("2) Show all entries")
        print("3) Show summary")
        print("4) Quit")
        choice = input("Pick an option: ")

        if choice == "1":
            add_entry(entries)
        elif choice == "2":
            show_entries(entries)
        elif choice == "3":
            show_summary(entries)
        elif choice == "4":
            print("Goodbye!")
            running = False
        else:
            print("That's not an option. Type 1, 2, 3 or 4.")

        # TODO (optional): add more menu options, like removing an entry


main()
