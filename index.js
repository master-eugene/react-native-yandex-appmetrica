import { NativeModules } from "react-native";

const { YandexMetrics: Metrics } = NativeModules;

class YandexMetrics {
  static activateWithApiKey(apiKey) {
    Metrics.activateWithApiKey(apiKey);
  }

  /**
   * Starts the statistics collection process using config.
   * @param {object} params
   */
  static activateWithConfig(params) {
    Metrics.activateWithConfig(params);
  }

  /**
   * Sends a custom event message and additional parameters (optional).
   * @param {string} message
   */
  static reportEvent(message) {
    Metrics.reportEvent(message);
  }

  /**
   * Sends a custom event message and additional parameters (optional).
   * @param {string} message
   * @param {object} [params=null]
   */
  static reportEvent(message, params) {
    Metrics.reportEvent(message, params);
  }

  /**
   * Sends error with reason.
   * @param {string} name
   * @param {object || string} exception
   */
  static reportError(name, exception) {
    Metrics.reportError(name, exception);
  }

  /**
   * Sends a Rvenue event message.
   * @param {string} productId
   * @param {number} price
   * @param {number} quantity
   */
  static reportRevenue(productId, price, quantity) {
    Metrics.reportRevenue(productId, price, quantity);
  }

  /**
   * Sets the ID of the user profile.
   * @param {string} userProfileId
   */
  static setUserProfileID(userProfileId) {
    Metrics.setUserProfileID(userProfileId);
  }

  /**
   * Sets attributes of the user profile.
   * @param {object} attributes
   */
  static setUserProfileAttributes(attributes) {
    const readyAttributes = {};
    Object.keys(attributes).forEach(key => {
      if (
        key === "birthDate" &&
        typeof attributes.birthDate === "object" &&
        typeof attributes.birthDate.getTime === "function"
      ) {
        readyAttributes.birthDate = attributes.birthDate.getTime();
      } else {
        readyAttributes[key] = attributes[key];
      }
    });
    Metrics.setUserProfileAttributes(readyAttributes);
  }

  /**
   * Sends saved events from buffer.
   */
  static sendEventsBuffer() {
    Metrics.sendEventsBuffer();
  }
}

export default YandexMetrics;
