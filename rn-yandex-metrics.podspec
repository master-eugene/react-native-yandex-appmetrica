require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "rn-yandex-metrics"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                    rn-yandex-metrics
                    DESC
  s.homepage     = "https://github.com/master-eugene/rn-yandex-metrics"
  s.license      = "MIT"
  # s.license    = { :type => "MIT", :file => "FILE_LICENSE" }
  s.authors      = { "master-eugene" => "eugene1kliuiev@gmail.com" }
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/master-eugene/rn-yandex-metrics.git" }

  s.source_files = "ios/**/*.{h,m}"
  s.requires_arc = true

  s.dependency "React"
  s.dependency "YandexMobileMetrica", "3.17.0"

end

