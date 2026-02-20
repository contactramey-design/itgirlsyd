# Push Your Changes to GitHub (so the site goes live)

---

## Quick fix (if push asks for password and then fails)

**GitHub does not accept your account password anymore.** You must use a **Personal Access Token** as the “password”:

1. **Create a token:** Go to https://github.com/settings/tokens → **Generate new token (classic)** → name it (e.g. “itgirlsyd”), check **repo** → **Generate token** → **copy it** (you won’t see it again).
2. In Terminal run: `cd /Users/sydneyrenay/itgirlsyd` then `git push origin main`.
3. When prompted:
   - **Username:** your GitHub username (e.g. `contactramey-design`) or `contact.ramey@gmail.com`
   - **Password:** **paste the token** (not your GitHub password). Nothing will show as you paste — that’s normal. Press Enter.

If you get “Invalid username or token”, the token was created by the wrong account — create the token while logged in as the user that **owns** the repo (contactramey-design).

---

Your project **is** on your computer at:
**`/Users/sydneyrenay/itgirlsyd`**

To see it in Finder: **Finder → Go → Go to Folder…** → paste: `~/itgirlsyd` → Go.

---

*(Only if you have a `push-with-token.sh` script in the project folder.)*

1. Open **Terminal**.
2. Run:
   ```bash
   cd /Users/sydneyrenay/itgirlsyd
   ./push-with-token.sh
   ```
3. When it asks, **paste your Personal Access Token** (nothing will show as you type — that’s normal), then press **Enter**.

---

## Why push failed

GitHub no longer accepts your account **password** for git over HTTPS. You need either:

- A **Personal Access Token** (use with HTTPS), or  
- **SSH keys** (then use the SSH remote)

Use **one** of the two options below.

---

## Option A: Personal Access Token (quickest)

1. **Create a token**
   - Go to: https://github.com/settings/tokens
   - Click **“Generate new token”** → **“Generate new token (classic)”**
   - Name it (e.g. “itgirlsyd push”)
   - Check **repo**
   - Click **Generate token**
   - **Copy the token** (you won’t see it again)

2. **Push using the token**
   - Open **Terminal**
   - Run:
     ```bash
     cd /Users/sydneyrenay/itgirlsyd
     git push origin main
     ```
   - **Username:** `contact.ramey@gmail.com` (or your GitHub username)
   - **Password:** paste the **token** (not your GitHub password)

After this, your changes will push and your host (e.g. Vercel) can deploy.

---

## Option B: Use SSH (no password each time)

You don’t have SSH keys yet. To create one and use it:

1. **Create a key**
   ```bash
   ssh-keygen -t ed25519 -C "contact.ramey@gmail.com" -f ~/.ssh/id_ed25519 -N ""
   ```

2. **Add the key to the agent**
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

3. **Copy the public key** (to add in GitHub in step 4)
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   Copy the whole line that appears.

4. **Add the key on GitHub**
   - Go to: https://github.com/settings/keys
   - **New SSH key** → paste the key → Save

5. **Point your repo at GitHub over SSH and push**
   ```bash
   cd /Users/sydneyrenay/itgirlsyd
   git remote set-url origin git@github.com:contactramey-design/itgirlsyd.git
   git push origin main
   ```

---

## After a successful push

Your code will be on GitHub and your connected host (e.g. Vercel) will deploy. The site will update once the build finishes.
