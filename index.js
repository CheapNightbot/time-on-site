document.addEventListener('DOMContentLoaded', () => {
    const timezoneElement = document.getElementById('timezone');
    const clockElement = document.getElementById('clock');
    const timezoneJapan = "Asia/Tokyo";

    const userTimezoneElement = document.getElementById('user-timezone');
    const userClockElement = document.getElementById('user-clock');
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    let is12HourFormat = true;

    function clock() {
        const clockTime = document.getElementById('date-time');
        const userClockTime = document.getElementById('user-date-time');
        const today = new Date();

        // Convert to user's timezone
        const userOptions = {
            timeZone: userTimeZone,
            hour: is12HourFormat ? '2-digit' : 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: is12HourFormat
        }

        // Convert to Asia/Tokyo timezone
        const options = {
            timeZone: timezoneJapan,
            hour: is12HourFormat ? '2-digit' : 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: is12HourFormat
        };

        // Get the formatted time string
        const time = today.toLocaleString('en-US', options);
        const usertime = today.toLocaleString('en-US', userOptions);

        // Print current time to the DOM
        userTimezoneElement.innerHTML = `Your Timezone: ${userTimeZone}`;
        userClockTime.innerHTML = `${usertime}`;

        timezoneElement.innerHTML = `Timezone: ${timezoneJapan}`;
        clockTime.innerHTML = `${time}`;
        setTimeout(clock, 1000);
    }

    clockElement.addEventListener('click', () => {
        is12HourFormat = !is12HourFormat;
    });

    userClockElement.addEventListener('click', () => {
        is12HourFormat = !is12HourFormat;
    });

    clock();
});
