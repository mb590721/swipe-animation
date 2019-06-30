import { animation, style, animate, trigger, transition, state } from '@angular/animations';

export const ongointPanAnimation =
trigger('ongoingPan', [
    state('*',
        style({
            transform: 'translateX({{translate_X}}px'
        }),
        {params: {translate_X: '0'}}
  )]);

export const endPanAnimation =
trigger('endPan', [
    state('true',
        style({
            transform: 'translateX({{translate_X}}px'
        }),
        {params: {translate_X: '0'}}
    ),
    transition(
        'false => true',
        animate(
            '0.3s ease-in',
            style({
                transform: 'translateX({{translate_X}}px'
            }),
        ),
        {params: {translate_X: '0'}}
    )
]);
