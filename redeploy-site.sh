# Updates
tmux kill-server
cd project-best-project
git fetch && git reset origin/main --hard
source python3-virtualenv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt

# Make new tmux session
tmux new-session -d 'export FLASK_ENV=development && flask run --host=0.0.0.0'
tmux split-window -h 'cd client && npm run dev -- --host'
