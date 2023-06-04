export function formatDate(dateString: string) {
	const date = new Date(dateString);

	// Format the day
	const day = date.getDate();

	// Format the month
	const monthIndex = date.getMonth();
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	const month = monthNames[monthIndex];

	// Format the year
	const year = date.getFullYear();

	// Construct the formatted date string
	const formattedDate = `${day} ${month} ${year}`;

	return formattedDate;
}
