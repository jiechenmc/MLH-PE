# Updates
tmux kill-server
cd project-best-project
git fetch && git reset origin/main --hard
source python3-virtualenv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt

systemctl restart myportfolio
tmux new -d 'cd client && npm run dev -- --host'
