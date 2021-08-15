export const currentDay = (dt) => {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
      new Date(dt * 1000)
    );
  };