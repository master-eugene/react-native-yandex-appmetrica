# rn-yandex-metrics

##### Install

```sh
yarn add rn-yandex-metrics
```

1.  **IOS**

    **RN<0.60**:

    ```sh
    react-native link rn-yandex-metrics
    ```

    With [CocoaPods](https://guides.cocoapods.org/using/getting-started.html), add the following line to
    your `Podfile`:

    ```sh
    pod 'rn-yandex-metrics', :path => '../node_modules/rn-yandex-metrics'
    pod 'YandexMobileMetrica', '3.17.0'
    ```

    Then run `pod install`.

    **RN>=0.60**:
    With React Native 0.60 and later, linking of pods is done automatically

    ```sh
    cd ios
    pod install
    ```

2.  **Android**

    **RN<0.60**:

    2.1. Open up `android/app/src/main/java/[...]/MainApplication.java`

    - Add `import com.mastereugene.yandexmetrics.YandexMetricsPackage;` to the imports at the top of the file
    - Add `new YandexMetricsPackage()` to the list returned by the `getPackages()` method

           2.2. Append the following lines to `android/settings.gradle`:
           `include ':rn-yandex-metrics'

      project(':rn-yandex-metrics').projectDir = new File(rootProject.projectDir, '../node_modules/rn-yandex-metrics/android')`

           2.3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
           ` implementation project(':rn-yandex-metrics')`

    **RN>=0.60**:
    With React Native 0.60 and later, linking is done automatically

## Usage

```js
import YandexMetrics from 'rn-yandex-metrics';

// Initialize
YandexMetrics.activateWithApiKey('KEY');

// OR
YandexMetrics.activateWithConfig({
  apiKey: 'KEY',
  sessionTimeout: 120,
  firstActivationAsUpdate: true,
});


YandexMetrics.setUserProfileID('12345');

YandexMetrics.setUserProfileAttributes({ ... })

// Sends a custom event message and additional parameters (optional).
YandexMetrics.reportEvent('My event');
YandexMetrics.reportEvent('My event', 'Test');
YandexMetrics.reportEvent('My event', { foo: 'bar' });

// Send a custom error event and additional parameters (optional).
YandexMetrics.reportError('My error');
YandexMetrics.reportError('My error', 'Test');
YandexMetrics.reportError('My error', { foo: 'bar' });
YandexMetrics.reportError('My error', new Error('test'));
```
