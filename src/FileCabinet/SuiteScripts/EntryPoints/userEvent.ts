/**
*@NApiVersion 2.1
*@NScriptType UserEventScript
*/

import {EntryPoints} from 'N/types';
import * as log from 'N/log';

export let beforeLoad: EntryPoints.UserEvent.beforeLoad = (context: EntryPoints.UserEvent.beforeLoadContext) => {}
export let beforeSubmit: EntryPoints.UserEvent.beforeSubmit = (context: EntryPoints.UserEvent.beforeSubmitContext) => {}
export let afterSubmit: EntryPoints.UserEvent.afterSubmit = (context: EntryPoints.UserEvent.afterSubmitContext) => {}