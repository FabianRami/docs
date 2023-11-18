import { Message, View } from '@aws-amplify/ui-react';
import React from 'react';

interface CalloutProps {
  info?: boolean;
  warning?: boolean;
  children?: React.ReactNode;
}

export const Callout = ({ warning, children }: CalloutProps) => {
  const childrenArray = React.Children.toArray(children);
  const childrenWithProps = childrenArray.map((child, index) => {
    if (
      React.isValidElement(child) &&
      child.type === 'p' &&
      index !== childrenArray.length - 1
    ) {
      // Add a style to 'p' elements except the last one
      return React.cloneElement(child as React.ReactElement, {
        style: { marginBottom: '20px' }
      });
    }
    return child;
  });
  return (
    <Message variation="filled" colorTheme={warning ? 'warning' : 'info'}>
      <View>{childrenWithProps}</View>
    </Message>
  );
};
