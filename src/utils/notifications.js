export function requestNotificationPermission() {
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
    return;
  }
  if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        scheduleNotifications();
      }
    });
  } else if (Notification.permission === "granted") {
    scheduleNotifications();
  }
}

export function scheduleNotifications() {
  if (Notification.permission !== "granted") return;

  const now = new Date();
  
  // Morning Notification (8:00 AM)
  let morningTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0, 0);
  if (now > morningTime) morningTime.setDate(morningTime.getDate() + 1);
  const msUntilMorning = morningTime - now;

  setTimeout(() => {
    new Notification("Good Morning!", {
      body: "Time to focus on Part B (Technical Subjects).",
    });
    scheduleNotifications(); // reschedule for next day
  }, msUntilMorning);

  // Evening Notification (6:00 PM)
  let eveningTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0, 0, 0);
  if (now > eveningTime) eveningTime.setDate(eveningTime.getDate() + 1);
  const msUntilEvening = eveningTime - now;

  setTimeout(() => {
    new Notification("Good Evening!", {
      body: "Time to focus on Part A (Tamil Eligibility).",
    });
  }, msUntilEvening);
}
