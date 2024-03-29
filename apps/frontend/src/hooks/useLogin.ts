import { Provider, Session } from '@supabase/supabase-js';
import { useState } from 'react';
import { supabase } from '../supabaseClient';

export const useLogin = (): [
  Session | null,
  (email: string, password: string) => void,
  (provider: Provider) => void
] => {
  const [session, setSession] = useState<Session | null>(null);

  const loginWithEmail = (email: string, password: string) => {
    supabase.auth
      .signInWithPassword({
        email,
        password,
      })
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
          return;
        }

        setSession(data.session);
      });
  };

  const loginWithOAuth = (provider: Provider) => {
    supabase.auth.signInWithOAuth({
      provider,
    });
  };

  return [session, loginWithEmail, loginWithOAuth];
};
