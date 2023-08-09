import { isMyEven } from '@example/is-my-even';
import React from 'react'
import { roles } from 'aria-query'
import * as dummy from 'aria-query/lib/etc/roles/abstract/commandRole'
import { initialAuthState as initialAuthStateDist } from '@auth0/auth0-react/dist/auth-state'
// import { initialAuthState as initialAuthStateSrc } from '@auth0/auth0-react/src/auth-state'

export const isMyOdd = (x: number) => !isMyEven(x);

export const someOtherValue = 123

export function IsMyOdd(): JSX.Element {
  console.info({ roles })
  console.info({ dummy })
  console.info({ initialAuthStateDist })
  // console.info({ initialAuthStateSrc })

  return <div>is-my-odd?</div>
}