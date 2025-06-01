import type { ContentData } from '../interfaces/content.interface';

import { createContext } from 'react';

export const ContentContext = createContext<ContentData | undefined>(undefined);
