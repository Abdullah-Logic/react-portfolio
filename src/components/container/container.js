import React, { useMemo } from 'react';
import styles from './container.module.css';
import { getBreakpointLabel } from './container.helper';
import useWindowWidth from '../../hooks/useWindowWidth';

const Container = ({ children, className = '', onBreakpointChange }) => {
  const windowWidth = useWindowWidth(onBreakpointChange);

  const responsiveMaxWidth = useMemo(() => {
    if (windowWidth === 0) return 'sm';
    return getBreakpointLabel(windowWidth);
  }, [windowWidth]);

  const containerClass = [
    styles.container,
    styles[`container-${responsiveMaxWidth}`],
    className
  ].filter(Boolean).join(' ');

  return <div className={containerClass}>{children}</div>;
};

export default Container;
