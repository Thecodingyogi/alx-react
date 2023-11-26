import * as notificationsData from '../../../../notifications.json';
import { normalize, schema } from "normalizer";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalized = normalize(notificationData, [notification]);

export default function getAllNotificationsByUser(userId) {
  const output = [];
  const notifications = normalized.entities.notification;
  const messages = normalized.entities.messages;

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      output.push(messages[notifications[id].context]);
    }
  }

  return output;
}

export const notificationsNormalizer = (data) => normalize(data, [notification]);
