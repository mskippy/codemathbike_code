# starter_quiz.py
# Unit 2 - 2A Build It - Starter for a quiz engine
# (asks questions, checks answers, reports a score)
#
# What's here:  a working menu loop and empty functions.
# What's not:   any of the actual quiz logic. That part is yours.
#
# Run it as-is first. The menu works, but every option just says
# "not built yet". Your job is to fill in each # TODO.


# ---------------------------------------------------------------
# The questions and answers
# Two lists that line up: questions[0] goes with answers[0], and so on.
# TODO: replace these with your own questions and answers (at least 5).
# ---------------------------------------------------------------
questions = [
    "TODO: write question 1",
    "TODO: write question 2",
]
answers = [
    "TODO: answer 1",
    "TODO: answer 2",
]


# ---------------------------------------------------------------
# ask_question(question, answer)
# Should: print the question, get the user's answer, and compare it
#         to the correct answer. Tell the user if they got it right.
#         Return True if they were right, False if not.
# Think about: should "Paris", "paris" and " paris " all count as right?
#         (.lower() and .strip() can help.)
# ---------------------------------------------------------------
def ask_question(question, answer):
    # TODO: print the question and get the user's answer with input()
    # TODO: compare their answer to the correct one
    # TODO: tell them if they were right or wrong
    # TODO: return True or False
    return False


# ---------------------------------------------------------------
# run_quiz(questions, answers)
# Should: loop through every question, call ask_question() for each,
#         count how many were right, then call show_score().
#         Return the score.
# ---------------------------------------------------------------
def run_quiz(questions, answers):
    # TODO: start a score counter at 0
    # TODO: loop through the questions (range(len(questions)) gives you each index)
    # TODO: call ask_question() and add 1 to the score if it returns True
    # TODO: call show_score() at the end
    # TODO: return the score
    print("This feature isn't built yet.")
    return 0


# ---------------------------------------------------------------
# show_score(score, total)
# Should: print the score in a friendly way, like "You got 4 out of 5"
#         and maybe a percentage or a message based on how they did.
# ---------------------------------------------------------------
def show_score(score, total):
    # TODO: print the score out of the total
    # TODO (optional): add a message that changes based on the score
    print("This feature isn't built yet.")


# ---------------------------------------------------------------
# Main menu loop (this part already works)
# It keeps showing the menu until the user picks Quit.
# ---------------------------------------------------------------
def main():
    past_scores = []  # a list to hold scores from each time the quiz is played

    print("Welcome to My Quiz!")  # TODO: give your quiz a real name and topic

    running = True
    while running:
        print()
        print("1) Take the quiz")
        print("2) See past scores")
        print("3) Quit")
        choice = input("Pick an option: ")

        if choice == "1":
            score = run_quiz(questions, answers)
            past_scores.append(score)
        elif choice == "2":
            # TODO: print the past_scores list in a friendly way
            # (or move this into its own function)
            print("This feature isn't built yet.")
        elif choice == "3":
            print("Goodbye!")
            running = False
        else:
            print("That's not an option. Type 1, 2 or 3.")


main()
