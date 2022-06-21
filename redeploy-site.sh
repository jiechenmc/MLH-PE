# Updates
tmux kill-server
cd project-best-project
git fetch && git reset origin/main --hard
python -m venv python3-virtualenv
source python3-virtualenv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt

# Make new tmux session
tmux new-session -d 'flask run --host=0.0.0.0'
tmux split-window -h 'cd client && npm run dev -- --host'
