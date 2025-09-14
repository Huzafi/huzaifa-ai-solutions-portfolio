import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useToast } from "../ui/use-toast";

const GEMINI_API_KEY = "AIzaSyD_6MxKtCT6RWVMYAMjvyx0uIHcbd7ZypI";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Huzaifa's AI assistant. I can help you learn more about his skills, projects, and background. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const portfolioContext = `
    Huzaifa Sheikh - AI & Automation Developer Profile:
    
    About: Professional AI & Automation Developer specializing in intelligent agents and workflow automation. Building smarter, more efficient processes with cutting-edge AI technology.
    
    Skills: 
    - Programming: Python, JavaScript, TypeScript, React, Node.js
    - AI & Machine Learning: OpenAI API, LangChain, Hugging Face, TensorFlow
    - Automation: Zapier, Make.com, n8n, Custom Workflows
    - Cloud & DevOps: AWS, Google Cloud, Docker, Vercel
    - Databases: PostgreSQL, MongoDB, Supabase
    - Tools: Git, VS Code, Postman, Figma
    
    Services:
    - AI Agent Development: Custom intelligent agents for business automation
    - Workflow Automation: Streamlined processes to boost productivity
    - API Integration: Seamless connections between different platforms
    - Data Analysis: Insights from your data with AI-powered analytics
    - Consultation: Strategic guidance on AI and automation implementation
    - Training & Support: Comprehensive training on AI tools and workflows
    
    Projects:
    1. AI Resume Analyzer: Intelligent resume analysis tool using Python and OpenAI API
    2. WhatsApp AI Agent: Smart WhatsApp agent using Node.js, Twilio API, and OpenAI
    3. Currency Converter Agent: Real-time currency conversion with live rates
    4. Writer Agent: AI-powered writing assistant with advanced capabilities
    5. Coding Agent: Intelligent coding assistant for developers
    
    Contact: Available for freelance projects and consultations
    Location: Available for remote work worldwide
    
    Focus Areas: Building AI solutions that solve real business problems and improve efficiency through intelligent automation.
  `;

  const generateResponse = async (userMessage: string) => {
    setIsLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      const prompt = `You are Huzaifa Sheikh's AI assistant. Answer questions about Huzaifa based on this portfolio information: ${portfolioContext}. 
      Keep responses conversational, helpful, and focused on Huzaifa's professional background. If asked about something not in the context, politely redirect to available information about his skills, projects, or services.
      
      User question: ${userMessage}`;
      
      const result = await model.generateContent(prompt);
      const response = result.response;

      let aiResponseText: string;
      if (response.candidates && response.candidates.length > 0) {
        aiResponseText = response.candidates[0].content.parts[0].text;
      } else {
        aiResponseText = "Sorry, I couldn't generate a response.";
      }
      
      const aiMessage: Message = {
        id: Date.now().toString(),
        text: aiResponseText,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "An error occurred while contacting AI. Please try again later.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const messageText = inputValue;
    setInputValue("");

    await generateResponse(messageText);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-strong hover:shadow-glow z-50 gradient-primary"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 max-sm:w-[calc(100vw-2rem)] max-sm:left-4 max-sm:right-4 h-[500px] shadow-strong z-40 flex flex-col bg-background border border-border">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50 rounded-t-lg">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                  <Bot className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-sm">Huzaifa's AI Chat Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>


          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${message.isUser ? "flex-row-reverse" : ""}`}>
                    <Avatar className="w-6 h-6 mt-1">
                      <AvatarFallback className={`${message.isUser ? "bg-primary text-primary-foreground" : "bg-muted"} text-xs`}>
                        {message.isUser ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`rounded-lg p-3 text-sm ${
                        message.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[80%]">
                    <Avatar className="w-6 h-6 mt-1">
                      <AvatarFallback className="bg-muted text-xs">
                        <Bot className="w-3 h-3" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg p-3 text-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border bg-muted/50 rounded-b-lg">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Huzaifa's skills, projects, or experience..."
                disabled={isLoading}
                className="text-sm"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                size="icon"
                className="shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatAssistant;