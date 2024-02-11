#!/usr/bin/env node
import askForAName from '../src/cli.js';
import { welcomeMessage } from '../src/utils.js';

welcomeMessage();
askForAName();