const initialNotifications = [
  {
    id: 4,
    timestamp: new Timestamp().subtract(1, "DAY"),
    body: "Important! Please change your password.",
    type: "alert",
  },
  {
    id: 1,
    timestamp: new Timestamp().subtract(4, "DAY"),
    body: "Welcome, here's some things to get you started.",
    type: "info",
  },
  {
    id: 3,
    timestamp: new Timestamp().subtract(2, "DAY"),
    body: "RJ has sent you a message.",
    type: "info",
  },
  {
    id: 2,
    timestamp: new Timestamp().subtract(3, "DAY"),
    body: "Upload your profile image.",
    type: "info",
  },
];

((app) => {
  const notifications = initialNotifications;

  /* api calls */
  async function getNotifications() {
    await sleep(randomNumber(2));
    return {
      data: notifications,
      meta: { total: notifications.length },
    };
  }

  async function addNotification(payload) {
    notifications.push({ ...payload, id: notifications.length + 1 });

    await sleep(randomNumber(2));
    return { data: payload };
  }

  // exports
  app.getNotifications = getNotifications;
  app.addNotification = addNotification;

  window.app = app;
})(window.app || {});
