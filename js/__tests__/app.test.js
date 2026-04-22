import { createCounter, toggleDarkMode } from '../app';

describe('createCounter', () => {
  test('initializes with 0 by default', () => {
    const counter = createCounter();
    expect(counter.getValue()).toBe(0);
  });

  test('initializes with a given value', () => {
    const counter = createCounter(5);
    expect(counter.getValue()).toBe(5);
  });

  test('increments the counter', () => {
    const counter = createCounter();
    counter.increment();
    expect(counter.getValue()).toBe(1);
  });

  test('decrements the counter', () => {
    const counter = createCounter(3);
    counter.decrement();
    expect(counter.getValue()).toBe(2);
  });

  test('resets the counter to zero', () => {
    const counter = createCounter(10);
    counter.reset();
    expect(counter.getValue()).toBe(0);
  });

  test('increments and decrements correctly', () => {
    const counter = createCounter();
    counter.increment();
    counter.increment();
    counter.decrement();
    expect(counter.getValue()).toBe(1);
  });
});

describe('toggleDarkMode', () => {
  beforeEach(() => {
    document.body.classList.remove('dark-mode');
    localStorage.clear();
  });

  test('adds dark-mode class to body', () => {
    toggleDarkMode();
    expect(document.body.classList.contains('dark-mode')).toBe(true);
  });

  test('removes dark-mode class when toggled again', () => {
    toggleDarkMode();
    toggleDarkMode();
    expect(document.body.classList.contains('dark-mode')).toBe(false);
  });

  test('saves preference to localStorage when enabling', () => {
    toggleDarkMode();
    expect(localStorage.getItem('darkMode')).toBe('enabled');
  });

  test('saves preference to localStorage when disabling', () => {
    toggleDarkMode();
    toggleDarkMode();
    expect(localStorage.getItem('darkMode')).toBe('disabled');
  });

  test('returns true when dark mode is enabled', () => {
    const result = toggleDarkMode();
    expect(result).toBe(true);
  });

  test('returns false when dark mode is disabled', () => {
    toggleDarkMode();
    const result = toggleDarkMode();
    expect(result).toBe(false);
  });
});
