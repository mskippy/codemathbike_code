# starter_calculator.py
# Unit 2 - 2A Build It - Starter for a calculator-type tool
# (unit converter, tip or bill splitter, grade calculator...)
#
# What's here:  a working menu loop and empty functions.
# What's not:   any of the actual calculator logic. That part is yours.
#
# Run it as-is first. The menu works, but every option just says
# "not built yet". Your job is to fill in each # TODO.
#
# Tip: rename things to fit YOUR tool. "do_calculation" could become
# "convert_units" or "split_bill". Just change the name everywhere it's used.


# ---------------------------------------------------------------
# get_number(prompt)
# Should: show the prompt, read what the user types, and keep asking
#         until they type a valid number. Then return that number
#         as an int (or a float, if your tool needs decimals).
# Why it matters: input() always gives you a string. If you do math
#         on a string, or the user types "abc", your program breaks.
# Hint: .isdigit() tells you if a string is all digits.
# ---------------------------------------------------------------
def get_number(prompt):
    # TODO: ask the user for input using the prompt
    # TODO: while the input isn't a valid number, show a message and ask again
    # TODO: convert it to a number and return it
    print("(get_number isn't built yet)")
    return 0


# ---------------------------------------------------------------
# do_calculation(history)
# Should: ask the user for the numbers your tool needs (use get_number),
#         do the calculation, print the result in a friendly way,
#         and add the result to the history list.
# Example for a tip calculator: ask for the bill and the tip percent,
#         work out the tip and total, print both.
# ---------------------------------------------------------------
def do_calculation(history):
    # TODO: get the input numbers with get_number()
    # TODO: do the calculation
    # TODO: print the result (an f-string works well here)
    # TODO: add the result to history with .append()
    print("This feature isn't built yet.")


# ---------------------------------------------------------------
# show_history(history)
# Should: print every past result from the history list, numbered,
#         or print a message if the list is empty.
# ---------------------------------------------------------------
def show_history(history):
    # TODO: if the list is empty, say so
    # TODO: otherwise, loop through the list and print each result
    print("This feature isn't built yet.")


# ---------------------------------------------------------------
# Main menu loop (this part already works)
# It keeps showing the menu until the user picks Quit.
# ---------------------------------------------------------------
def main():
    history = []  # a list to hold past results so the user can look back

    print("Welcome to My Calculator!")  # TODO: give your tool a real name

    running = True
    while running:
        print()
        print("1) Do a calculation")  # TODO: rename options to match your tool
        print("2) Show history")
        print("3) Quit")
        choice = input("Pick an option: ")

        if choice == "1":
            do_calculation(history)
        elif choice == "2":
            show_history(history)
        elif choice == "3":
            print("Goodbye!")
            running = False
        else:
            print("That's not an option. Type 1, 2 or 3.")

        # TODO (optional): add more menu options for extra features


main()
