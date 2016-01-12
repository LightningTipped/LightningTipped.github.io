function getResult(roll1, roll2) {
	winner = (roll1-roll2)%3; // -1 is left win, 0 is tie, 1 is right win
	if (winner == 2)
		winner = -1;
	if (winner == -2)
		winner = 1;
	return winner;
}