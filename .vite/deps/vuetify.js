import {
  DateAdapterSymbol,
  DateOptionsSymbol,
  GoToSymbol,
  createDate,
  createGoTo,
  useDate,
  useGoTo,
  useLayout
} from "./chunk-F7OA2DSQ.js";
import {
  DisplaySymbol,
  LocaleSymbol,
  ThemeSymbol,
  createDisplay,
  createLocale,
  createTheme,
  useDisplay,
  useLocale,
  useRtl,
  useTheme
} from "./chunk-PI5HPV6O.js";
import {
  IconSymbol,
  createIcons
} from "./chunk-WBRPLEZW.js";
import {
  DefaultsSymbol,
  IN_BROWSER,
  createDefaults,
  defineComponent,
  mergeDeep,
  useDefaults
} from "./chunk-KWMB5ZLK.js";
import {
  effectScope,
  nextTick,
  reactive
} from "./chunk-IDACCYAP.js";

// node_modules/vuetify/lib/framework.js
function createVuetify() {
  let vuetify = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint,
    ...rest
  } = vuetify;
  const options = mergeDeep(blueprint, rest);
  const {
    aliases = {},
    components = {},
    directives = {}
  } = options;
  const scope = effectScope();
  return scope.run(() => {
    const defaults = createDefaults(options.defaults);
    const display = createDisplay(options.display, options.ssr);
    const theme = createTheme(options.theme);
    const icons = createIcons(options.icons);
    const locale = createLocale(options.locale);
    const date = createDate(options.date, locale);
    const goTo = createGoTo(options.goTo, locale);
    function install(app) {
      for (const key in directives) {
        app.directive(key, directives[key]);
      }
      for (const key in components) {
        app.component(key, components[key]);
      }
      for (const key in aliases) {
        app.component(key, defineComponent({
          ...aliases[key],
          name: key,
          aliasName: aliases[key].name
        }));
      }
      const appScope = effectScope();
      appScope.run(() => {
        theme.install(app);
      });
      app.onUnmount(() => appScope.stop());
      app.provide(DefaultsSymbol, defaults);
      app.provide(DisplaySymbol, display);
      app.provide(ThemeSymbol, theme);
      app.provide(IconSymbol, icons);
      app.provide(LocaleSymbol, locale);
      app.provide(DateOptionsSymbol, date.options);
      app.provide(DateAdapterSymbol, date.instance);
      app.provide(GoToSymbol, goTo);
      if (IN_BROWSER && options.ssr) {
        if (app.$nuxt) {
          app.$nuxt.hook("app:suspense:resolve", () => {
            display.update();
          });
        } else {
          const {
            mount
          } = app;
          app.mount = function() {
            const vm = mount(...arguments);
            nextTick(() => display.update());
            app.mount = mount;
            return vm;
          };
        }
      }
      if (typeof __VUE_OPTIONS_API__ !== "boolean" || __VUE_OPTIONS_API__) {
        app.mixin({
          computed: {
            $vuetify() {
              return reactive({
                defaults: inject.call(this, DefaultsSymbol),
                display: inject.call(this, DisplaySymbol),
                theme: inject.call(this, ThemeSymbol),
                icons: inject.call(this, IconSymbol),
                locale: inject.call(this, LocaleSymbol),
                date: inject.call(this, DateAdapterSymbol)
              });
            }
          }
        });
      }
    }
    function unmount() {
      scope.stop();
    }
    return {
      install,
      unmount,
      defaults,
      display,
      theme,
      icons,
      locale,
      date,
      goTo
    };
  });
}
var version = "3.8.12";
createVuetify.version = version;
function inject(key) {
  const vm = this.$;
  const provides = vm.parent?.provides ?? vm.vnode.appContext?.provides;
  if (provides && key in provides) {
    return provides[key];
  }
}
export {
  createVuetify,
  useDate,
  useDefaults,
  useDisplay,
  useGoTo,
  useLayout,
  useLocale,
  useRtl,
  useTheme,
  version
};
//# sourceMappingURL=vuetify.js.map
