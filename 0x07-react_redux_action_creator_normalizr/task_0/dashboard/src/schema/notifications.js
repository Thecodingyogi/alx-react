import * as notificationsData from '../../../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  return notificationsData.filter((notification) => notification.author.id === userId).map((notification => notification.context));
}
