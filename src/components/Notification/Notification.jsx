import React, {useState, useEffect} from "react";
import {useTransition} from "react-spring";

import {NotificationHubWrapper, Message, Button, Content, Life} from "./Notification.styles";

let id = 0;

const NotificationHub = ({
  config = {tension: 125, friction: 20, precision: 0.1},
  timeout = 2000,
  children,
}) => {
  const [refMap] = useState(() => new WeakMap());
  const [cancelMap] = useState(() => new WeakMap());
  const [items, setItems] = useState([]);
  const transitions = useTransition(items, (item) => item.key, {
    from: {opacity: 0, height: 0, life: "100%"},
    enter: (item) => async (next) =>
      await next({opacity: 1, height: refMap.get(item).offsetHeight}),
    leave: (item) => async (next, cancel) => {
      cancelMap.set(item, cancel);
      await next({life: "0%"});
      await next({opacity: 0});
      await next({height: 0});
    },
    onRest: (item) => setItems((state) => state.filter((i) => i.key !== item.key)),
    config: (item, state) => (state === "leave" ? [{duration: timeout}, config, config] : config),
  });

  useEffect(() => void children((msg) => setItems((state) => [...state, {key: id++, msg}])), []);

  return (
    <NotificationHubWrapper>
      {transitions.slice(-3).map(({key, item, props: {life, ...style}}) => (
        <Message key={key} style={style}>
          <Content ref={(ref) => ref && refMap.set(item, ref)}>
            <Life style={{right: life}} />
            <p>{item?.msg}</p>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                cancelMap.has(item) && cancelMap.get(item)();
              }}
            >
              X
            </Button>
          </Content>
        </Message>
      ))}
    </NotificationHubWrapper>
  );
};

export default NotificationHub;
