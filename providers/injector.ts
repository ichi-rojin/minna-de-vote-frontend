import { inject, InjectionKey } from "vue";

export default function injector<T>(key: InjectionKey<T>): T {
  const injected = inject(key);
  if (!injected) {
    throw new Error(`${key} is not provided`);
  }
  return injected;
}
