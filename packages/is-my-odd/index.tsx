import { isMyEven } from '@example/is-my-even';
import React from 'react'
import { roles } from 'aria-query'
import * as dummy from 'aria-query/lib/etc/roles/abstract/commandRole'

export const isMyOdd = (x: number) => !isMyEven(x);

export const someOtherValue = 123

export function IsMyOdd(): JSX.Element {
  console.info({ roles })
  console.info({ dummy })

  return <div>is-my-odd?</div>
}