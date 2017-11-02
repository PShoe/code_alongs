require 'zombie'


describe Zombie do
  context 'without any values' do
    let(:zombie) { Zombie.new }

    it 'is named Fred' do
      expect(zombie.name).to eq 'Fred'
    end
    it 'has not eaten any brains' do
      expect(zombie.brains_eaten).to be < 1
    end
    it 'should be hungry' do
      # expect(zombie.hungry?).to eq true
      expect(zombie).to be_hungry
    end
  end

  context 'with values' do
      let(:zombie) { Zombie.new('Julian', 3, false) }

    it 'is named Julian' do
      expect(zombie.name).to eq 'Julian'
    end
    it 'has eaten 3 brains' do
      expect(zombie.brains_eaten).to eq 3
    end
    it 'is not hungry' do
      expect(zombie).to_not be_hungry
    end
  end

  context 'can' do
    let(:zombie) { Zombie.new('Julian', 3, false) }

    it 'should keep track of brains eaten' do
      expect {zombie.eat}.to change {zombie.brains_eaten}.by(1)
    end
  end


end
