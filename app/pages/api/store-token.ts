// app/api/store-token.ts

import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Token is required' });
    }

    // Set the token in an HTTP-only cookie
    res.setHeader('Set-Cookie', cookie.serialize('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      sameSite: 'strict',
      path: '/',
    }));

    return res.status(200).json({ success: true });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
